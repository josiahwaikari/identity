import React from "react";

export default function withPageIndicatorContainer<P>(
  WrappedComponent: React.ComponentType<P>
) {
  return function ComponentWithContainer(props: any) {
    return <WrappedComponent {...props} />;
  };
}
