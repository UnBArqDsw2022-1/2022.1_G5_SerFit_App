import {ListItem/**, Avatar*/} from "@rneui/themed";
import React from "react";
import { FlatList } from 'react-native';

export default class SearchList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <FlatList 
                data={this.props.data}
                renderItem={({item}) => (
                    <ListItem key={item.id}>
                    {
                        // <Avatar /> Must implement Avatar on backend}
                    }
                        <ListItem.Content>
                            <ListItem.Title>{item.name}</ListItem.Title>
                            <ListItem.Subtitle>{item.mainInterest}</ListItem.Subtitle>
                        </ListItem.Content>
                    </ListItem>
                )}                
            />
        );
    }
}
