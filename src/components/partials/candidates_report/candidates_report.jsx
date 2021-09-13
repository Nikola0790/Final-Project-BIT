export const CandidateReport = (props) => {
  //let image = props.match.params.avatar;
  let avatar =
    "https://via.placeholder.com/200/b3b3b3/FFFFFF/?text=Placeholder";
  let birth = props.match.params.birthday;
  let name = props.match.params.name;
  let email = props.match.params.email;
  let education = props.match.params.education;

  /* const [candidateInfo, setCandidateInfo] = useState([]);

  useEffect(() => {
    getCandidates().then((candidates) => {
      setCandidateInfo(candidates);
    });
  }, []);
  console.log(candidateInfo);

  let candidateData = candidateInfo.filter((item) => {
    if (item.id === id) {
      return item;
    }
  }); */
  let day = new Date(birth).getDate();
  let month = new Date(birth).getMonth() + 1;
  let year = new Date(birth).getFullYear();
  let dateOfBirth = `${day}-${month}-${year}`;
  return (
    <div>
      <img src={avatar} alt="img of candidate" />
      <div>
        <h3>{name}</h3>
        <h3>date of birth: {dateOfBirth}</h3>
        <h3>email: {email}</h3>
        <h3>education: {education}</h3>
      </div>
    </div>
  );
};
