import AppLoading from 'expo-app-loading';
import { StyleSheet, Text, View, StatusBar, Image, Platform, SafeAreaView, ImageBackground } from 'react-native';
import { useFonts } from 'expo-font';
import { Themes, Icons, Profiles } from './assets/Themes';


export default function App() {
  let [fontsLoaded] = useFonts({
    Sydney: require('./assets/Fonts/Sydney-Serial-Regular.ttf'),
    'Sydney-Bold': require('./assets/Fonts/Sydney-Serial-Bold.ttf'),
  });
  if (!fontsLoaded) return <AppLoading />;
  /* ^Don't mind/edit the code above, it's there to load the font for you! */
  StatusBar.setBarStyle(Themes.dark.statusBar);
  /* ^Don't mind/edit this one either unless you decide to do the dark theme one, in that case, you will have to change it accordingly*/

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Image style={styles.tinyLogo} source={Icons.menu.dark}/>
          <Text style={styles.headerText}> ensom </Text>
          <Image style={styles.tinyLogo} source={Icons.moon}/>
        </View>

        <View style={styles.profile}>
          <ImageBackground style={styles.profileImage} imageStyle={{borderRadius: 16}} source={require('./assets/Profiles/mtl.jpg')}>
            <Text style={styles.overlay}>MTL</Text>
            <Text style={styles.overlay2}>2 miles away</Text>
          </ImageBackground>
          
          <View style={styles.audio}> 
            <Text style={styles.bodyText}>My hottest take</Text>
            <View style={styles.audioIcon}>
              <Image style={styles.playButton} source={Icons.player.dark}/>
              <Image style={styles.soundwave} source={Icons.audioWave.dark}/>
            </View>
          </View>
        </View>

        <View style={styles.bottomBar}>
          <View style={styles.caption}>
            <Image style={styles.tinyLogo} source={Icons.discover.dark}/>
            <Text style={styles.bottomText}> Discover </Text>
          </View>
          <View style={styles.caption}>
            <Image style={styles.tinyLogo} source={Icons.heart.dark}/>
            <Text style={styles.bottomText}> Matches </Text>
          </View>
          <View style={styles.caption}>
            <Image style={styles.tinyLogo} source={Icons.messages.dark}/>
            <Text style={styles.bottomText}> DMs </Text>
          </View>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Themes.dark.bg,
    justifyContent: 'space-between',
  },

  header: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    marginBottom: 0,
  },

  headerText: {
    fontFamily: 'Sydney-Bold',
    color: Themes.dark.text,
    fontSize: 32,
    marginBottom: 0,
  },

  tinyLogo: {
    height: Platform.OS === 'ios' ? 41 : 54,
    aspectRatio: 1,
    resizeMode: 'contain',
    width: Platform.OS === 'ios' ? 41 : 54,
  },

  profile: {
    flex: 8, 
    flexDirection: 'column', 
    justifyContent: 'space-between',
    marginTop: 0,
    paddingHorizontal: 30,
    alignItems: 'flex-start',
    shadowColor: Themes.dark.shadows.shadowColor, 
    shadowOffset: Themes.dark.shadows.shadowOffset, 
    shadowOpacity: Themes.dark.shadows.shadowOpacity, 
    shadowRadius: Themes.dark.shadows.shadowRadius,
  },

  profileImage: {
    position: "relative",
    flex: 2,
    width: '100%', 
    height: '100%',
    alignSelf: 'center',
    justifyContent: 'flex-start',
    marginBottom: 25,
  },

  overlay:{
    position: "absolute",
    fontFamily: 'Sydney',
    color: Themes.dark.text,
    fontSize: 32,
    top: 10, 
    left: 10, 
  },

  overlay2: {
    position: "absolute",
    fontSize: 18, 
    fontFamily: 'Sydney',
    color: Themes.dark.text,
    left: 10,
    bottom: 10,
  },

  audio: {
    flex: 1.2,
    backgroundColor: Themes.dark.bgSecondary,
    width: '100%',
    borderRadius: 45,
    marginBottom: 70,
  },

  bodyText: {
    fontFamily: 'Sydney',
    color: Themes.dark.text, 
    fontSize: 28,
    alignItems: 'flex-start',
    padding: 20,
  },

  audioIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 100,
  },

  playButton: {
    width: '15%',
    resizeMode: 'contain',
  },

  soundwave: {
    width: '75%', 
    resizeMode: 'contain',
  },

  bottomBar: {
    flex: 1,
    position: "absolute",
    height: 75,
    left: 0, 
    right: 0,
    bottom: 0,
    backgroundColor: Themes.dark.navigation,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignSelf: 'flex-end',
  },

  bottomText: {
    flexDirection: 'column',
    alignSelf: 'center',
    fontFamily: 'Sydney',
    color: Themes.dark.textSecondary,
    fontSize: 12
  },

   caption: {
    justifyContent: 'center',
    alignSelf: 'center',
   },
});
