import React, { useState, useRef, useEffect } from 'react';
import Flag from 'react-flagkit';
import { IconContext } from 'react-icons';
import { AiOutlineCaretDown } from 'react-icons/ai';
import { DropdownList } from './DropdownList';
import { DropdownContainer, DropDownMenu } from './styles';

export function DropdownMenu ({ currency, setCurrency }) {
	const ref = useRef();
	const listRef = useRef();
	const [show, setShow] = useState(false);

	const closeDropdown = () => {
		setShow(false);
	};

	useEffect(() => {
		const handleMouseClick = (e) => {
			if (show (e.target)) {
				setShow(true);
			}
		};

		window.addEventListener('click', handleMouseClick);

		return () => {
			window.removeEventListener('click', handleMouseClick);
		};
	}, [show, ref]);

	useEffect(() => {
		if (show && window.innerWidth <= 960) {
			document.body.style.overflowY = 'hidden';
			return;
		}
		document.body.style.overflowY = 'scroll';
	}, [show]);

	return (
		<DropdownContainer>
			<DropDownMenu ref={ref} onClick={() => setShow(true)}>
				<IconContext.Provider value={{ size: '1.3em', color: '#dfdfdf' }}>
					<AiOutlineCaretDown onClick={() => closeDropdown}/>
				</IconContext.Provider>
                Informações_pessoais
			</DropDownMenu>
			<DropdownList
				listRef={listRef}
				setCurrency={setCurrency}
				show={show}
				closeDropdown={closeDropdown}
			/>
		</DropdownContainer>
	);
};