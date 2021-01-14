import styled from "styled-components";

// const styles = StyleSheet.create({});
// export default styles;

export const Container = styled.View`
  background-color: #8257e5;
  flex: 1;
  justify-content: center;
  padding: 40px;
`;

export const Image = styled.Image`
  width: 100%;
`;

export const TextTitle = styled.Text`
  font-family: "Poppins_400Regular";
  color: #fff;
  font-size: 20px;
  line-height: 30px;
  margin-top: 80px;
`;

export const TextTitleBold = styled.Text`
  font-family: "Poppins_600SemiBold";
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  margin-top: 40px;
  justify-content: space-between;
`;

export const Button = styled.TouchableOpacity`
  height: 150px;
  width: 48%;
  background-color: #333;
  border-radius: 8px;
  padding: 24px;
  justify-content: space-between;
`;

export const ButtonText = styled.Text`
  font-family: "Archivo_700Bold";
  color: #fff;
  font-size: 20px;
`;

export const ImageIcon = styled.Image``;

export const TextConnections = styled.Text`
  font-family: "Poppins_400Regular";
  color: #d4c2ff;
  font-size: 12px;
  line-height: 20px;
  max-width: 140px;
  margin-top: 40px;
`;
