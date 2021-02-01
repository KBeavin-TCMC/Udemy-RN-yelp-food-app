import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);

    const searchApi = async () => {
        const response = await yelp.get('/search', {
            params: {
                limit: 50,
                term,
                location: 'indianapolis'
            }
        });
        setResults(response.data.businesses);
    };

    return (
        <View style={{backgroundColor: "white", ...StyleSheet.absoluteFillObject}}>
            <SearchBar
              term={term}
              onTermChange={setTerm}
              onTermSubmit={searchApi}  
            />
            <Text>Search Screen</Text>
            <Text>We have found {results.length}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    
})

export default SearchScreen;