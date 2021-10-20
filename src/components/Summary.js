import image from "../assets/images/success.png";
import useFetch from "../hooks/useFetch";
import classes from "../styles/Summary.module.css";

export default function Summary({ score, noq }) {
  function getKeyword() {
    if ((score / (noq * 5)) * 100 < 50) {
      return "faild";
    } else if ((score / (noq * 5)) * 100 < 75) {
      return "good";
    } else if ((score / (noq * 5)) * 100 < 100) {
      return "very good";
    } else {
      return "excellent";
    }
  }
  console.log(getKeyword());

  const { loading, error, result } = useFetch(
    `https://api.pexels.com/v1/search?query=${getKeyword()}&per_page=1`,
    "GET",
    {
      Authorization: process.env.REACT_APP_PEXELS_API_KEY,
    }
  );

  //const img = {result ? result?.photos[0].src.medium :} image;

  return (
    <div className={classes.summary}>
      <div className={classes.point}>
        {/* <!-- progress bar will be placed here --> */}
        <p className={classes.score}>
          Your score is <br />
          {score} out of {noq * 5}
        </p>
      </div>

      {loading && <div className={classes.badge}>Loading...</div>}
      {error && (
        <div className={classes.badge}>
          <img src={image} alt="Success" />
        </div>
      )}
      {!error && !loading && (
        <div className={classes.badge}>
          <img src={image} alt="Success" />
        </div>
      )}
    </div>
  );
}
