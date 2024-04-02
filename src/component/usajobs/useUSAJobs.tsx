import React, { useEffect, useState } from "react";
import { useGetUsaJobs } from "../../utils/get.API.ts";
import { useQueryClient } from "react-query";
import { FormValues } from "../../types/USAJob-Tyoes.ts";

export const useUSAJobs = (): Record<string, any> => {
  const queryClient = useQueryClient();
  const [dutieslist, setDutieslist] = useState([] as number[]);
  const [dutyModalShow, setDutyModalShow] = React.useState(false);
  const [requirementlist, setRequirementlist] = useState([] as number[]);
  const [requirementModalShow, setRequirementModalShow] = React.useState(false);
  const [refetchAgain, setRefetchAgain] = React.useState(false);
  const [formValues, setFormValues] = useState<FormValues>({
    title: "",
    location: "",
  });

  const { data, isFetched } = useGetUsaJobs(formValues, refetchAgain);

  useEffect(() => {
    let tempCountList = [] as number[];
    data?.SearchResult?.SearchResultItems?.map((jobData, index) =>
      tempCountList.push(index)
    );
    setDutieslist(tempCountList);
    setRequirementlist(tempCountList);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
    setRefetchAgain(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setRefetchAgain(true);
  };

  const updateDuty = (index: number) => {
    const found = dutieslist.find((element) => element === index); //
    if (found) setDutieslist(dutieslist.filter((count) => index !== count));
    //Remove from array
    else setDutieslist([...dutieslist, index]); //Add to array
  };

  const updateRequirement = (index: number) => {
    const found = dutieslist.find((element) => element === index); //
    if (found)
      setRequirementlist(requirementlist.filter((count) => index !== count));
    //Remove from array
    else setRequirementlist([...requirementlist, index]); //Add to array
  };

  const getDutyStatus = (index: number) => {
    const found = dutieslist.find((element) => element === index);
    if (found) return true;
    else return false;
  };

  const getRequirementStatus = (index: number) => {
    const found = requirementlist.find((element) => element === index);
    if (found) return true;
    else return false;
  };

  return {
    formValues,
    handleChange,
    handleSubmit,
    data,
    setDutieslist,
    dutyModalShow,
    setDutyModalShow,
    requirementModalShow,
    setRequirementModalShow,
    updateDuty,
    updateRequirement,
    getDutyStatus,
    getRequirementStatus,
  };
};
