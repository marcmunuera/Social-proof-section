import CardStar from './components/cardStar/CardStar';
import { cardProfile } from './constants/cardProfile';

const App = () => {
	return (
		<>
			{cardProfile.map(card => (
				<CardStar
					key={card.id}
					nameCard={card.nameProfile}
					subNameCard={card.subNameProfile}
					textCard={card.textProfile}
				/>
			))}
		</>
	);
};

export default App;
