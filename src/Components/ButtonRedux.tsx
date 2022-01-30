import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import {useAppDispatch} from '../app/hooks';
import {
  increment,
  decrement,
  incrementByAmount,
} from '../features/counter/counterSlice';

const ButtonRedux = () => {
  const dispatch = useAppDispatch();

  return (
    <>
      <TouchableOpacity
        onPress={() => dispatch(increment())}
        style={{
          backgroundColor: '#06f',
          padding: 10,
          borderRadius: 6,
          margin: 10,
        }}>
        <Text
          style={{
            color: '#fff',
            textAlign: 'center',
            fontSize: 25,
            fontWeight: 'bold',
          }}>
          Increment
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => dispatch(decrement())}
        style={{
          backgroundColor: '#ff0000',
          padding: 10,
          borderRadius: 6,
          margin: 10,
        }}>
        <Text
          style={{
            color: '#fff',
            textAlign: 'center',
            fontSize: 25,
            fontWeight: 'bold',
          }}>
          Decrement
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => dispatch(incrementByAmount(10))}
        style={{
          backgroundColor: '#000',
          padding: 10,
          borderRadius: 6,
          margin: 10,
        }}>
        <Text
          style={{
            color: '#fff',
            textAlign: 'center',
            fontSize: 25,
            fontWeight: 'bold',
          }}>
          Add 10
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default ButtonRedux;
