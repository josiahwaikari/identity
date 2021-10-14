import React, { useEffect } from "react";
import { OnboardingPage } from "./interfaces";

const pages: OnboardingPage[] = [
  {
    id: 1,
    indicator: true,
    title: "unique identification",
    description:
      "You will be assigned a unique identity which you can use to travel and pay for things with ease.",
    image: require("./assets/identity.png"),
  },
  {
    id: 2,
    title: "automatic tagging",
    indicator: true,
    description:
      "By giving permission to use bluetooth, locational data and SSI to tag you on and off, you won’t have to do anything. Just walk on and off.",
    image: require("./assets/automatic-tagging.png"),
  },
  {
    id: 3,
    title: "quick and easy setup",
    description:
      "No account, no sign up, just a form of payment and you are ready to start travelling using this service.",
    image: require("./assets/quick-easy-setup.png"),
  },
];

export default function withOnboardingContainer<P>(
  WrappedComponent: React.ComponentType<P>
) {
  return function ComponentWithContainer(props: any) {
    const [pageNumber, setPageNumber] = React.useState<number>(1);
    const [page, setPage] = React.useState<OnboardingPage | {}>({});

    const previousPage = () => setPageNumber((prevPage) => prevPage - 1);
    const nextPage = () => setPageNumber((prevPage) => prevPage + 1);
    const goToPage = (pageNumber: number) => setPageNumber(pageNumber);

    useEffect(() => {
      const pageToSet = pages.find((page) => page.id === pageNumber);

      if (pageToSet) {
        setPage(pageToSet || {});
      }
    }, [pageNumber]);

    return (
      <WrappedComponent
        {...props}
        page={page}
        indicatorPages={pages.filter((page) => page.indicator)}
        pageNumber={pageNumber}
        previousPage={previousPage}
        nextPage={nextPage}
        goToPage={goToPage}
      />
    );
  };
}
