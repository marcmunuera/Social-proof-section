import { StyledCardName, StyledCardSubName, StyledContainer } from './styles';

const CardStar = props => {
	return (
		<>
			<StyledContainer>
				<img src='' alt='' />
				<StyledCardName>{props.nameCard}</StyledCardName>
				<StyledCardSubName>{props.subNameCard}</StyledCardSubName>
				<p>{props.textCard}</p>
			</StyledContainer>
		</>
	);
};

export default CardStar;
