import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { RectButton, GestureHandlerRootView } from 'react-native-gesture-handler';
import SwipeableImage from '../swips/swipes';

function Swipes({ users, currentIndex, handleLike, handlePass, swipesRef }) {
  const [willLike, setWillLike] = useState(false);
  const [willPass, setWillPass] = useState(false);
  const renderLeftActions = () => {
    return (
      <RectButton style={styles.container}>
        <SwipeableImage user={users[currentIndex + 1]}></SwipeableImage>
      </RectButton>
    );
  };
  const renderRightActions = () => {
    return (
      <RectButton style={styles.container}>
        <SwipeableImage user={users[currentIndex + 1]}></SwipeableImage>
      </RectButton>
    );
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <Swipeable
        ref={swipesRef}
        friction={2}
        leftThreshold={40}
        rightThreshold={40}
        renderLeftActions={renderLeftActions}
        renderRightActions={renderRightActions}
        onSwipeableLeftOpen={() => {
          setWillLike(false);
          handleLike();
        }}
        onSwipeableRightOpen={() => {
          setWillPass(false);
          handlePass();
        }}
        onSwipeableLeftWillOpen={() => setWillLike(true)}
        onSwipeableRightWillOpen={() => setWillPass(true)}
      >
        <SwipeableImage user={users[currentIndex]} willLike={willLike} willPass={willPass} />
      </Swipeable>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheetjustify.create({
  container: {

  },
});

export default React.forwardRef((props, ref) => (
  <Swipes swipesRef={ref} {...props} />
));