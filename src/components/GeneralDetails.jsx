
export const GeneralDetails = ({ id, height, weight, baseExperience }) => {
  return (
    <>
      <div className="row">
        <div className="col-6">
          <p className="details-text">
            <strong>Height:</strong> {height}0cm
          </p>
        </div>
        <div className="col-6 d-flex justify-content-end">
          <p className="details-text">
            <strong>No.</strong> {id}
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col-6">
          <p className="details-text">
            <strong>Experience:</strong> {baseExperience}
          </p>
        </div>
        <div className="col-6 d-flex justify-content-end">
          <p className="details-text">
            <strong>Weight:</strong> {weight}
            kg
          </p>
        </div>
      </div>
    </>
  );
};
