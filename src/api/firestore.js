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
        games: item._data.games,
        maxPlayers: item._data.maxPlayers,
        maxPoints: item._data.maxPoints,
        maxWinners: item._data.maxWinners,
        minPlayers: item._data.minPlayers,
        name: item._data.name,
        pointsCount: item._data.pointsCount,
      };
    });
    return games.sort((a, b) =>
      a.name > b.name ? 1 : b.name > a.name ? -1 : 0,
    );
  }

  static async addGame(game) {
    await firebase
      .firestore()
      .collection(AppConstants.FIRESTORE.GAMES_COLLECTION)
      .add(game);
  }

  static async updateGame(game, id) {
    console.log('FIRESTORE UPDATE GAME', game, id);
    await firebase
      .firestore()
      .collection(AppConstants.FIRESTORE.GAMES_COLLECTION)
      .doc(id)
      .set({
        games: game.games,
        maxPlayers: game.maxPlayers,
        maxPoints: game.maxPoints,
        maxWinners: game.maxWinners,
        minPlayers: game.minPlayers,
        name: game.name,
        pointsCount: game.pointsCount,
      });
  }
}

export default FirestoreService;
