import React from 'react';
import Input from './Input';
import GetAvatar from './GetAvatar';

class PanelFill extends React.Component {
	render() {
		return (
			<section className="fillTheGap">
				<Input
					divClassName="fillTheGap-item"
					labelClassName="fillTheGap-label"
					labelFor="name"
					labelInnerText="Full name"
					inputClassName="fillTheGap-input"
					inputType="text"
					inputId="name"
					inputName="name"
					inputPlaceholders="Ex: Sally Hill"
					methodInputText={this.props.methodInputText}
					profileObject={this.props.profileObject.name}
				/>

				<Input
					divClassName="fillTheGap-item"
					labelClassName="fillTheGap-label"
					labelFor="job"
					labelInnerText="Job"
					inputClassName="fillTheGap-input"
					inputType="text"
					inputId="job"
					inputName="job"
					inputPlaceholders="Ex: Front-end unicorn"
					methodInputText={this.props.methodInputText}
					profileObject={this.props.profileObject.job}
				/>

				<GetAvatar
					divClassName="fillTheGap-label profilePicture-align"
					labelClassName="fillTheGap-label"
					labelFor="profilePicture"
					labelInnerText="Profile picture"
					btnType="button"
					btnClassName="btn btn-profilePicture js__profile-trigger"
					btnSrc="#"
					btnInnerText="Add picture"
					divPreviewClassName="fillTheGap-input profile-miniature js__profile-preview"
					inputType="file"
					inputClassName="input-file js__profile-upload-btn"
					updateAvatar={this.props.updateAvatar}
				/>

				<Input
					divClassName="fillTheGap-item"
					labelClassName="fillTheGap-label"
					labelFor="email"
					labelInnerText="Email"
					inputClassName="fillTheGap-input circle-item"
					inputType="email"
					inputId="email"
					inputName="email"
					inputPlaceholders="Ex: sallyhill@gmail.com"
					methodInputText={this.props.methodInputText}
					profileObject={this.props.profileObject.email}
				/>

				<Input
					divClassName="fillTheGap-item"
					labelClassName="fillTheGap-label"
					labelFor="phone"
					labelInnerText="Phone number"
					inputClassName="fillTheGap-input circle-item"
					inputType="tel"
					inputId="phone"
					inputName="phone"
					inputPlaceholders="Ex: 555-55-55-55"
					methodInputText={this.props.methodInputText}
					profileObject={this.props.profileObject.tel}
				/>

				<Input
					divClassName="fillTheGap-item"
					labelClassName="fillTheGap-label"
					labelFor="linkedin"
					labelInnerText="Linkedin"
					inputClassName="fillTheGap-input circle-item"
					inputType="text"
					inputId="linkedin"
					inputName="linkedin"
					inputPlaceholders="Ex: sally.hill"
					methodInputText={this.props.methodInputText}
					profileObject={this.props.profileObject.linkedin}
				/>

				<Input
					divClassName="fillTheGap-item"
					labelClassName="fillTheGap-label"
					labelFor="github"
					labelInnerText="GitHub"
					inputClassName="fillTheGap-input circle-item"
					inputType="text"
					inputId="github"
					inputName="github"
					inputPlaceholders="Ex: sally-hill"
					methodInputText={this.props.methodInputText}
					profileObject={this.props.profileObject.github}
				/>
			</section>
		);
	}
}

export default PanelFill;
