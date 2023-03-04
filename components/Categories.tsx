import { ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import { sanityClient } from "../sanity";

const Catagories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const query = `*[_type=="category"]`;
    sanityClient.fetch(query).then((data) => setCategories(data));
  });
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
    >
      {categories?.map((category: any) => {
        return (
          <CategoryCard
            key={category._id}
            title={category.name}
            imgUrl={category.image}
          />
        );
      })}
    </ScrollView>
  );
};

export default Catagories;
