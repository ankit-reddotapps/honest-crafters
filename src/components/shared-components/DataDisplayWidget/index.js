import React from 'react'
import { Card, Avatar } from 'antd'
import Flex from '../Flex'
import CustomStatistic from '../CustomStatistic'

import './index.css';

const DataDisplayWidget = props => {
	const { size, value, title, text , icon, color, avatarSize, vertical, alignItems } = props
	const customStatisticProps = { size, value, text }
	return (
		<Card>
			<Flex alignItems={alignItems} flexDirection={vertical ? 'column' : 'row'} >
				{icon && <Avatar size={avatarSize} shape="square" icon={icon} className={`ant-avatar-${color} mb-4`}/>}
					
				<div className='title'>{title}</div>
				<div className={vertical ? 'mt-3 text-center' : 'ml-3'}>
					<CustomStatistic {...customStatisticProps}/>
				</div>
			</Flex>
		</Card>
	)
}

DataDisplayWidget.defaultProps = {
	avatarSize: 50,
	vertical: false
};

export default DataDisplayWidget
