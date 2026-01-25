export const getAge = (date: Date) => {
	const thisDate = new Date();
	const [thisYear, thisMonth, thisDay] = [thisDate.getFullYear(), thisDate.getMonth(), thisDate.getDate()];
	const [birthYear, birthMonth, birthDay] = [date.getFullYear(), date.getMonth(), date.getDate()];
	let age = thisYear - birthYear;
	if (thisMonth > birthMonth || (thisMonth == birthMonth && thisDay < birthDay)) age--;
	return age;
};
