import { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { searchUrl } from "../util/api";
import { headers } from "../util/util";
import { COUNTER_DATA } from "../modules/mainSlice";

const useIntersect = (
  targetRef,
  getSearchRepo,
  setGetSearchRepo,
  setIsScrollLoading
) => {
  const page = useSelector((state) => state.main.pageCounter);
  const searchText = useSelector((state) => state.main.searchString);
  const [showList, setShowList] = useState([]);
  const dispatch = useDispatch();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getApiHandler = (target, page) => {
    const url = `${searchUrl}?q=${target}&per_page=20&page=${page}`;
    (async () => {
      try {
        const res = await axios.get(url, headers);
        const result = res.data.items.map((el) => {
          const fullName = el.full_name.split("/");
          return { userID: fullName[0], repoName: fullName[1] };
        });
        setGetSearchRepo([...getSearchRepo, ...result]);
        dispatch(COUNTER_DATA());
      } catch (err) {
        // console.log("더 이상 데이터 없음");
        setIsScrollLoading(false);
      }
    })();
  };

  const callback = useCallback(
    ([entry]) => {
      if (entry.isIntersecting) {
        // console.log("데이터 추가 스크롤 시작");
        setIsScrollLoading(true);
        getApiHandler(searchText, page);
      }
    },
    [getApiHandler, setIsScrollLoading, page, searchText]
  );

  useEffect(() => {
    if (Array.isArray(getSearchRepo)) {
      setShowList(getSearchRepo);
    }
    if (!targetRef.current) return;
    const observer = new IntersectionObserver(callback, {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    });
    observer.observe(targetRef.current);
    return () => observer.disconnect();
  }, [targetRef, callback, getSearchRepo]);
  return showList;
};

export default useIntersect;
