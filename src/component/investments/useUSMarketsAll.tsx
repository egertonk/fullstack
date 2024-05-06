import React, { useEffect, useState } from "react";
import { useGetUSMarkets } from "../../utils/get.API.ts";

export const useUSMarketsAll = (): Record<string, any> => {
  const [sticker, setSticker] = useState("");
  const [refetchFullData, setRefetchFullData] = React.useState(false);
  const [firstLoad, setFirstLoad] = React.useState(true);
  const { data: fullDetailsData } = useGetUSMarkets(
    sticker || "tsla",
    refetchFullData || firstLoad
  );

  useEffect(() => {
    if (fullDetailsData && refetchFullData) {
      setRefetchFullData(false);
    }
  }, [fullDetailsData]);

  useEffect(() => {
    setFirstLoad(false);
  }, []);

  const handleChangeUSMarkets = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSticker(value);
  };

  const handleUSMarketsSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setRefetchFullData(true);
  };

  return {
    sticker,
    fullDetailsData,
    refetchFullData,
    handleUSMarketsSubmit,
    handleChangeUSMarkets,
  };
};
