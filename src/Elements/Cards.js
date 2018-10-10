import React from 'react';
import styled from 'styled-components';
import {elevation, transition, colors} from '../Utilities';


export const Card = styled.div`
	
	background: white;
	width: 300px;
	border-radius: 5px;
	margin: 0 auto;
	padding: 15px;
	color: ${colors.black} 
	${elevation[4]};
	${transition({
		property: 'box-shadow',
	})}

	&:hover{
		${elevation[5]}

	}
	
`;
