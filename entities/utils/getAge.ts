export const getAge = (birthDate: Date | string): number => {
	const date = typeof birthDate === "string" ? new Date(birthDate) : birthDate;

	const today = new Date();
	const birthYear = date.getFullYear();
	const birthMonth = date.getMonth();
	const birthDay = date.getDate();

	let age = today.getFullYear() - birthYear;

	if (today.getMonth() < birthMonth || (today.getMonth() === birthMonth && today.getDate() < birthDay)) {
		age--;
	}

	return age;
};
