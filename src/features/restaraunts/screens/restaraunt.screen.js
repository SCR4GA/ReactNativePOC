import React, { useContext } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import styled from "styled-components";
import { RestaurantInfoCard } from "../components/restaraunt-info-card.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { Search } from "../components/search.component";
import { ActivityIndicator } from "react-native-paper";
import { colors } from "../../../infrastructure/theme/colors";
import { SafeArea } from "../../../utils/safe-area.component";

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const Loading = styled(ActivityIndicator)`
margin-left = -25px;
`;

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const RestaurantsScreen = ({ navigation }) => {
  const { isLoading, restaurants } = useContext(RestaurantsContext);
  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={colors.primary} />
        </LoadingContainer>
      )}
      <Search />
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetail", {
                  restaurant: item,
                })
              }
            >
              <Spacer position="bottom" size="large">
                <RestaurantInfoCard restaurant={item} />
              </Spacer>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
