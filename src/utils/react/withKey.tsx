//import React from "react";

//function withKey(key?: string) {
//  return <E, T extends React.ComponentType<E>>(component: T) => (
//    props: E,
//    index: number
//  ) =>
//    React.createElement(
//      component,
//      { ...props, key: key ? props[key as keyof E] : index },
//      []
//    );
//}

//export const withIdKey = withKey("id");
//export const withIndexKey = withKey();
