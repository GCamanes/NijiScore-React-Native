import firebase from 'react-native-firebase';
import AppConstants from '../app/app.constants';

class FirestoreService {
  static async getGames() {
    const gamesData = await firebase
      .firestore()
      .collection(AppConstants.FIRESTORE.GAMES_COLLECTION)
      .get();
    const games = gamesData._docs.map(item => {
      return {
        id: item.id,
        maxPlayers: item._data.maxPlayers,
        maxPoints: item._data.maxPoints,
        maxWinners: item._data.maxWinners,
        minPlayers: item._data.minPlayers,
        name: item._data.name,
        showPoints: item._data.showPoints,
      };
    });
    return games;
  }
}

export default FirestoreService;
