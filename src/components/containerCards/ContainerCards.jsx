import { cardProfile } from '../../constants/cardProfile';
import CardStar from '../cardStar/CardStar';
import { SyledContainerCards } from './styles';

const ContainerCards = () => {
	return (
		<>
			<SyledContainerCards>
				{cardProfile.map(card => (
					<CardStar
						key={card.id}
						imgCard={card.imageProfile}
						nameCard={card.nameProfile}
						subNameCard={card.subNameProfile}
						textCard={card.textProfile}
						marginCard={card.marginCard}
					/>
				))}
			</SyledContainerCards>
		</>
	);
};
export default ContainerCards;
