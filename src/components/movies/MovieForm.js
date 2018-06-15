import React from 'react';
import TextInput from '../common/TextInput';

const MovieForm = ({movie, onChange, errors}) => {
  return (
    <form>
      <h1>Manage Movie</h1>
      <TextInput
        name="title"
        label="Title"
        vale={movie.title}
        onChange={onChange}
        errors={errors.title}/>
    </form>
  );
};

MovieForm.propTypes = {
  movie: React.PropTypes.object.isRequired,
  onChange: React.PropTypes.func.isRequired,
  errors: React.PropTypes.object
};

export default MovieForm;
