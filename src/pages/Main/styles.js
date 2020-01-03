import styled from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
    flex: 1;
    padding: 30px;
    background: #fff;
`;

export const Form = styled.View`
    flex-direction: row;
    padding-bottom: 20px;
    border-bottom-width: 1px;
    border-color: #eee;
`;

export const Input = styled.TextInput.attrs({
    placeholderTextColor: '#666',
})`
    flex: 1;
    height: 40px;
    background: #eee;
    border: 1px solid #eee;
    padding: 0 15px;
    border-radius: 4px;
`;

export const SubmitButton = styled(RectButton)`
    justify-content: center;
    align-items: center;
    background: #7159c1;
    border-radius: 4px;
    padding: 0 12px;
    margin-left: 10px;
`;

export const List = styled.FlatList.attrs({
    showsVerticalScrollIndicator: false,
})`
    margin-top: 20px;
`;

export const User = styled.View`
    align-items: center;
    margin: 0px 20px 30px;
`;

export const Avatar = styled.Image`
    width: 128px;
    height: 128px;
    border-radius: 64px;
    background-color: #eee;
`;

export const Name = styled.Text`
    font-size: 14px;
    color: #333;
    font-weight: bold;
    margin-top: 5px;
    text-align: center;
`;

export const Bio = styled.Text.attrs({
    numberOfLines: 2,
})`
    font-size: 13px;
    align-content: center;
    line-height: 18px;
    color: #333;
    margin-top: 5px;
    text-align: center;
`;

export const ProfileButton = styled(RectButton)`
    margin-top: 10px;
    align-self: stretch;
    justify-content: center;
    align-items: center;
    background: #7159c1;
    padding: 10px;
    border-radius: 4px;
    height: 36px;
    opacity: ${props => (props.loading ? 0.5 : 1)};
`;

export const ProfileButtonText = styled.Text`
    font-size: 14px;
    color: #fff;
    font-weight: bold;
    text-transform: uppercase;
`;

export const ErrorText = styled.Text`
    font-size: 16px;
    margin: 10px auto;
    color: #ff0000;
`;
