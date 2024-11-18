import { useState } from "react";
import axios from "axios";
import styles from './styles/contact.module.scss';
import cx from 'classnames';

const Contact = ({data}) => {
	const [email_address, setEmail] = useState("");
	const [FNAME, setFirstName] = useState("");
	const [LNAME, setLastName] = useState("");
	const [PHONE, setPhone] = useState("");
	const [COMPANY, setCompany] = useState("");
	const [addr1, setAddr1] = useState("");
	const [city, setCity] = useState("");
	const [state, setState] = useState("");
	const [zip, setZip] = useState("");

	const [appState, setAppState] = useState("IDLE");
	const [errorMessage, setErrorMessage] = useState(null);
  
	const subscribe = async () => {
	  setAppState("LOADING");
	  setErrorMessage(null);
	  try {
		const response = await axios.post("/api/newsletter", {
			email_address,
			FNAME,
			LNAME,
			PHONE,
			COMPANY,
			addr1, city, state, zip
		});
		setAppState("SUCCESS");
	  } catch (e) {
		setErrorMessage(e.response.data.error);
		setAppState("ERROR");
	  }
	};
  
	return (
		<div className={styles.root}>
						
			<div className={styles.wrapper}>
				<div className={cx(styles.column, styles.left)}>
					<div className={styles.field}>
						<div>Email *</div>
						<input
							className=""
							type="text"
							placeholder=""
							value={email_address}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div className={styles.field}>
						<div>First Name *</div>
						<input
							className=""
							type="text"
							placeholder=""
							value={FNAME}
							onChange={(e) => setFirstName(e.target.value)}
						/>
					</div>
					<div className={styles.field}>
						<div>Last Name *</div>
						<input
							className=""
							type="text"
							placeholder=""
							value={LNAME}
							onChange={(e) => setLastName(e.target.value)}
						/>
					</div>
					<div className={styles.field}>
						<div>Company *</div>
						<input
							className=""
							type="text"
							placeholder=""
							value={COMPANY}
							onChange={(e) => setCompany(e.target.value)}
						/>
					</div>
				</div>
				<div className={cx(styles.column, styles.right)}>
					<div className={styles.field}>
						<div>Phone</div>
						<input
							className=""
							type="text"
							placeholder=""
							value={PHONE}
							onChange={(e) => setPhone(e.target.value)}
						/>
					</div>
					<div className={styles.field}>
						<div>Address</div>
						<input
							className=""
							type="text"
							placeholder=""
							value={addr1}
							onChange={(e) => setAddr1(e.target.value)}
						/>
					</div>
					<div className={styles.field}>
						<div>City</div>
						<input
							className=""
							type="text"
							placeholder=""
							value={city}
							onChange={(e) => setCity(e.target.value)}
						/>
					</div>
					<div className={styles.stateAddress}>
						<div className={styles.field}>
							<div>State</div>
							<input
								className=""
								type="text"
								placeholder=""
								value={state}
								onChange={(e) => setState(e.target.value)}
							/>
						</div>
						<div className={styles.field}>
							<div>Zip Code</div>
							<input
								className=""
								type="text"
								placeholder=""
								value={zip}
								onChange={(e) => setZip(e.target.value)}
							/>
						</div>
					</div>
					
				</div>
				
			</div>

			{appState === "ERROR" && (
				<div className={styles.error}>{errorMessage}</div>
			)}
			{appState === "SUCCESS" && (
				<div className={styles.success}>Thank you!</div>
			)}			

			<button
				className={styles.button}
				type="button"
				disabled={appState === "LOADING"}
				onClick={subscribe}
			>
				Submit
			</button>

	
		</div>
	);
  };

export default Contact;
