import React from 'react';
import Fieldset from './Fieldset';
import PanelColors from './PanelColors';
import PanelFill from './PanelFill';
import PanelShare from './PanelShare';

class MainForm extends React.Component {
	render() {
		return (
			<form action="" method="post">
				<Fieldset
					title="Design"
					classIcon="far fa-object-ungroup"
					btnId="ButtonDesign"
					arrowId="arrow-design"
					arrow="up"
				>
					<PanelColors
						methodColorChange={this.props.methodColorChange}
						checked={this.props.checked}
					/>
				</Fieldset>

				<Fieldset
					title="Fill"
					classIcon="far fa-keyboard"
					btnId="ButtonFill"
					arrowId="arrow-fillTheGap"
					arrow="down"
				>
					<PanelFill
						methodInputText={this.props.methodInputText}
						profileObject={this.props.profileObject}
						updateAvatar={this.props.updateAvatar}
					/>
				</Fieldset>

				<Fieldset
					title="Share"
					classIcon="fas fa-share-alt"
					btnId="ButtonShare"
					arrowId="arrow-share"
					arrow="down"
				>
					<PanelShare
						btnShare={this.props.btnShare}
						messageError={this.props.messageError}
						success={this.props.success}
						urlCard={this.props.urlCard}
					/>
				</Fieldset>
			</form>
		);
	}
}

export default MainForm;
