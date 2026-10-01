import {
	StyledCardName,
	StyledCardSubName,
	StyledCardText,
	StyledContainer,
	StyledContainerBottom,
	StyledContainerNames,
	StyledContainerTop,
	StyledImg
} from './styles';

const CardStar = props => {
	return (
		<>
			<StyledContainer marginTop={props.marginCard}>
				<StyledContainerTop>
					<StyledImg src={props.imgCard} alt='' />
					<StyledContainerNames>
						<StyledCardName>{props.nameCard}</StyledCardName>
						<StyledCardSubName>{props.subNameCard}</StyledCardSubName>
					</StyledContainerNames>
				</StyledContainerTop>
				<StyledContainerBottom>{props.textCard}</StyledContainerBottom>
			</StyledContainer>
		</>
	);
};

export default CardStar;
