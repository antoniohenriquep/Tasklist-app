import { Pressable, View ,Text} from 'react-native';

export default function SubmitButton(props) {
    return (
        <Pressable onPress={props.onPress} style={props.buttonStyle}>
            <Text style={props.buttonFontStyle}>
                {props.text}
            </Text>
        </Pressable>
    );
}