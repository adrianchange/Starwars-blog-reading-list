const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			storePeople: [],
			storePlanets: [],
			storeVehicles: [], 
			storeFavorites: [], 
			storeDetails: {}
		},
		actions: {
			setPeople: (people)=>{
				const store = getStore()
				setStore({...store, storePeople:people})
			},

			setPlanets: (planets)=>{
				const store = getStore()
				setStore({...store, storePlanets:planets})
			}, 

			setVehicles: (vehicles)=>{
				const store = getStore()
				setStore({...store, storeVehicles:vehicles})
			}, 
			
			setFavorites: (name)=>{
				const store = getStore()
				setStore({...store, storeFavorites:[...store.storeFavorites, name]})
			}, 
			
			deleteFavorites: (name) => {
				const store = getStore();
					setStore({...store, storeFavorites:[store.storeFavorites.filter((fav) => fav != name)]})
				
			}

		}
	};
};
console.log(store.setFavorites);

export default getState;
