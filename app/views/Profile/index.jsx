import React from "react"
import {
	View,
	Image,
} from "react-native";
import { Text } from 'react-native-paper';
import EditInput from '../../components/inputs/EditInput';
import styles from "./styles"
import personalProfile from "../../assets/personal-profile.png"

const [name, setName] = useState('Pedro da Silva');
const [idade, setIdade] = useState('28');
const [description, setDescription] = useState('Personal Trainer a 5 anos, formado em Ed. Física na UnB, wpp: 5561984576321');

const Profile = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.container}>
                <Text>Perfil Personal</Text>
            </View>

            <View style={styles.container}>
                <View style={styles.container}>
                    <Image source={personalProfile} style={styles.user__image}/>
                </View>

                <View style={styles.form}>
                    <EditInput>
                        label={'Nome'}
                        fieldDefaultValue={name}
                        setText={setName}
                    </EditInput>

                    <EditInput>
                        label={'Idade'}
                        fieldDefaultValue={idade}
                        setText={setIdade}
                    </EditInput>

                    <EditInput>
                        label={'Descrição'}
                        fieldDefaultValue={description}
                        setText={setDescription}
                    </EditInput>
                </View>
            </View>
        </View>
    );
};

export default Profile