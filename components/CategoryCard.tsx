import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

type CatalogCardProps = {
  imgUrl: string;
  title: string;
};

const CategoryCard = ({ imgUrl, title }: CatalogCardProps) => {
  return (
    <TouchableOpacity className="relative mr-2">
      <Image source={{ uri: imgUrl }} className="h-20 w-20 rounded" />
      <Text className="absolute bottom-1 left-1 text-white font-bold">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
