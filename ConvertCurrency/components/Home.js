import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {useEffect, useState} from 'react';
import CountryPicker from 'react-native-country-picker-modal';
import axios from 'axios';
import {Dimensions} from 'react-native';

const getFirstRate = () => {
  axios({
    method: 'GET',
    url: `https://free.currconv.com/api/v7/convert?q=VND_USD&compact=ultra&apiKey=2608fe3f6633170d0f6b`,
  })
    .then(Response => {
      console.log(Response.data['VND_USD']);
      return Response.data['VND_USD'];
    })
    .catch(Error => {
      console.log(Error);
    });
};

let deviceHeight = Dimensions.get('window').height;

const Home = () => {
  const [country1, setCountry1] = useState(null);
  const [country2, setCountry2] = useState(null);
  const [countryCode1, setCountryCode1] = useState('VN');
  const [countryCode2, setCountryCode2] = useState('US');
  const [nameCountry1, setNameCountry1] = useState('Vietnam');
  const [nameCountry2, setNameCountry2] = useState('United States');
  const [currency1, setCurrency1] = useState('VND');
  const [currency2, setCurrency2] = useState('USD');
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [number3, setNumber3] = useState(0);
  const [number4, setNumber4] = useState(0);
  const [number5, setNumber5] = useState(0);
  const [number6, setNumber6] = useState(0);
  const [number7, setNumber7] = useState(0);
  const [number8, setNumber8] = useState(0);
  const [number9, setNumber9] = useState(0);
  const [rate, setRate] = useState(() => getFirstRate());
  const [rate2, setRate2] = useState();
  const [rate3, setRate3] = useState();
  const [rate4, setRate4] = useState();
  const [rate5, setRate5] = useState();
  const [rate6, setRate6] = useState();
  const [rate7, setRate7] = useState();
  const [rate8, setRate8] = useState();

  useEffect(() => {
    axios({
      method: 'GET',
      url: `https://free.currconv.com/api/v7/convert?q=${currency1}_${currency2}&compact=ultra&apiKey=b6366a77f18ab64db900`,
    })
      .then(Response => {
        setRate(Response.data[`${currency1}_${currency2}`]);
      })
      .catch(Error => {
        console.log(Error);
      });
  }, [currency1, currency2]);

  useEffect(() => {
    axios({
      method: 'GET',
      url: `https://free.currconv.com/api/v7/convert?q=${currency1}_GBP&compact=ultra&apiKey=b6366a77f18ab64db900`,
    })
      .then(Response => {
        setRate2(Response.data[`${currency1}_GBP`]);
      })
      .catch(Error => {
        console.log(Error);
      });
  }, [currency1]);

  useEffect(() => {
    axios({
      method: 'GET',
      url: `https://free.currconv.com/api/v7/convert?q=${currency1}_CNY&compact=ultra&apiKey=b6366a77f18ab64db900`,
    })
      .then(Response => {
        setRate3(Response.data[`${currency1}_CNY`]);
      })
      .catch(Error => {
        console.log(Error);
      });
  }, [currency1]);

  useEffect(() => {
    axios({
      method: 'GET',
      url: `https://free.currconv.com/api/v7/convert?q=${currency1}_JPY&compact=ultra&apiKey=b6366a77f18ab64db900`,
    })
      .then(Response => {
        setRate4(Response.data[`${currency1}_JPY`]);
      })
      .catch(Error => {
        console.log(Error);
      });
  }, [currency1]);

  useEffect(() => {
    axios({
      method: 'GET',
      url: `https://free.currconv.com/api/v7/convert?q=${currency1}_CAD&compact=ultra&apiKey=b6366a77f18ab64db900`,
    })
      .then(Response => {
        setRate5(Response.data[`${currency1}_CAD`]);
      })
      .catch(Error => {
        console.log(Error);
      });
  }, [currency1]);

  useEffect(() => {
    axios({
      method: 'GET',
      url: `https://free.currconv.com/api/v7/convert?q=${currency1}_AUD&compact=ultra&apiKey=b6366a77f18ab64db900`,
    })
      .then(Response => {
        setRate6(Response.data[`${currency1}_AUD`]);
      })
      .catch(Error => {
        console.log(Error);
      });
  }, [currency1]);

  useEffect(() => {
    axios({
      method: 'GET',
      url: `https://free.currconv.com/api/v7/convert?q=${currency1}_RUB&compact=ultra&apiKey=b6366a77f18ab64db900`,
    })
      .then(Response => {
        setRate7(Response.data[`${currency1}_RUB`]);
      })
      .catch(Error => {
        console.log(Error);
      });
  }, [currency1]);

  useEffect(() => {
    axios({
      method: 'GET',
      url: `https://free.currconv.com/api/v7/convert?q=${currency1}_SGD&compact=ultra&apiKey=b6366a77f18ab64db900`,
    })
      .then(Response => {
        setRate8(Response.data[`${currency1}_SGD`]);
      })
      .catch(Error => {
        console.log(Error);
      });
  }, [currency1]);

  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#7c7d7c',
          borderRadius: 10,
          height: 100,
        }}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              flex: 1,
              flexDirection: 'row',
            }}>
            <CountryPicker
              withAlphaFilter={true}
              countryCode={countryCode1}
              withFilter={true}
              withFlag={true}
              withCurrency={true}
              withFlagButton={true}
              onSelect={country => {
                setCountry1(country);
                setCountryCode1(country.cca2);
                setNameCountry1(country.name);
                setCurrency1(country.currency[0]);
              }}
            />
            <Text style={{textAlign: 'center', fontSize: 13, color: 'white'}}>
              {nameCountry1}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TextInput
              style={styles.textInput}
              keyboardType="numeric"
              placeholder="0"
              placeholderTextColor="white"
              value={number1.toString()}
              onChangeText={val => {
                setNumber1(val);
                setNumber2((val * rate).toFixed(2));
                setNumber3((val * rate2).toFixed(2));
                setNumber4((val * rate3).toFixed(2));
                setNumber5((val * rate4).toFixed(2));
                setNumber6((val * rate5).toFixed(2));
                setNumber7((val * rate6).toFixed(2));
                setNumber8((val * rate7).toFixed(2));
                setNumber9((val * rate8).toFixed(2));
              }}
            />
            <Text style={{color: 'white'}}>{currency1}</Text>
          </View>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity
            onPress={() => {
              let tempCode1 = countryCode1;
              let tempName1 = nameCountry1;
              let tempCurrency1 = currency1;
              let tempNum = number1;
              setCountryCode1(countryCode2);
              setNameCountry1(nameCountry2);
              setCurrency1(currency2);
              setNumber1(number2);
              setCountryCode2(tempCode1);
              setNameCountry2(tempName1);
              setCurrency2(tempCurrency1);
              setNumber2(tempNum);
            }}>
            <Image
              source={require('./assets/swap-horizontal.png')}
              width={24}
              height={24}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              paddingVertical: 10,
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <CountryPicker
              withAlphaFilter={true}
              countryCode={countryCode2}
              withFilter={true}
              withCurrency={true}
              withFlagButton={true}
              onSelect={country2 => {
                setCountry2(country2);
                setCountryCode2(country2.cca2);
                setNameCountry2(country2.name);
                setCurrency2(country2.currency[0]);
              }}
            />
            <Text style={{textAlign: 'center', fontSize: 13, color: 'white'}}>
              {nameCountry2}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TextInput
              style={styles.textInput}
              keyboardType="numeric"
              placeholder="0"
              placeholderTextColor="white"
              value={number2.toString()}
              onChangeText={val => {
                setNumber2(val);
                setNumber1((val / rate).toFixed(2));
              }}
            />
            <Text style={{color: 'white'}}>{currency2}</Text>
          </View>
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          backgroundColor: '#e1e4e6',
          borderRadius: 10,
          height: deviceHeight - 120,
        }}>
        <View style={styles.Container}>
          <View style={styles.Row}>
            <View style={styles.subContainer}>
              <Image
                source={require('./assets/flags/gb-nir.png')}
                style={styles.image}
              />
              <Text style={styles.txtName}>EU</Text>
            </View>
            <View style={styles.subContainer}>
              <Text style={styles.txtName}>{number3}</Text>
              <Text style={styles.txtName}>Euro</Text>
            </View>
          </View>
        </View>
        <View style={styles.Container}>
          <View style={styles.Row}>
            <View style={styles.subContainer}>
              <Image
                source={require('./assets/flags/cn.png')}
                style={styles.image}
              />
              <Text style={styles.txtName}>China</Text>
            </View>
            <View style={styles.subContainer}>
              <Text style={styles.txtName}>{number4}</Text>
              <Text style={styles.txtName}>CNY</Text>
            </View>
          </View>
        </View>
        <View style={styles.Container}>
          <View style={styles.Row}>
            <View style={styles.subContainer}>
              <Image
                source={require('./assets/flags/jp.png')}
                style={styles.image}
              />
              <Text style={styles.txtName}>Japan</Text>
            </View>
            <View style={styles.subContainer}>
              <Text style={styles.txtName}>{number5}</Text>
              <Text style={styles.txtName}>JPY</Text>
            </View>
          </View>
        </View>
        <View style={styles.Container}>
          <View style={styles.Row}>
            <View style={styles.subContainer}>
              <Image
                source={require('./assets/flags/ca.png')}
                style={styles.image}
              />
              <Text style={styles.txtName}>Canadian</Text>
            </View>
            <View style={styles.subContainer}>
              <Text style={styles.txtName}>{number6}</Text>
              <Text style={styles.txtName}>CAD</Text>
            </View>
          </View>
        </View>
        <View style={styles.Container}>
          <View style={styles.Row}>
            <View style={styles.subContainer}>
              <Image
                source={require('./assets/flags/au.png')}
                style={styles.image}
              />
              <Text style={styles.txtName}>Australia</Text>
            </View>
            <View style={styles.subContainer}>
              <Text style={styles.txtName}>{number7}</Text>
              <Text style={styles.txtName}>AUD</Text>
            </View>
          </View>
        </View>
        <View style={styles.Container}>
          <View style={styles.Row}>
            <View style={styles.subContainer}>
              <Image
                source={require('./assets/flags/ru.png')}
                style={styles.image}
              />
              <Text style={styles.txtName}>Rusian</Text>
            </View>
            <View style={styles.subContainer}>
              <Text style={styles.txtName}>{number8}</Text>
              <Text style={styles.txtName}>RUB</Text>
            </View>
          </View>
        </View>
        <View style={styles.Container}>
          <View style={styles.Row}>
            <View style={styles.subContainer}>
              <Image
                source={require('./assets/flags/sg.png')}
                style={styles.image}
              />
              <Text style={styles.txtName}>Singapore</Text>
            </View>
            <View style={styles.subContainer}>
              <Text style={styles.txtName}>{number9}</Text>
              <Text style={styles.txtName}>SGD</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  textInput: {
    color: 'white',
    textAlign: 'center',
  },
  Container: {
    padding: 10,
  },
  Row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: '#888d94',
    borderBottomWidth: 0.5,
    alignItems: 'center',
  },
  txtName: {
    marginLeft: 10,
  },
  subContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 10,
  },
  image: {
    width: 30,
    height: 30,
    resizeMode: 'center',
  },
});
export default Home;
