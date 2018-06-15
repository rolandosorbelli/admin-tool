import React from 'react';
import TextInput from '../common/TextInput';

const MovieForm = ({movie, onSave, onChange, loading, errors}) => {
  return (
    <form>
      <h1>Manage Movie</h1>
      <TextInput
        name="title"
        label="Title"
        vale={movie.title}
        onChange={onChange}
        error={errors.title}/>

      <TextInput
        name="director"
        label="Director"
        vale={movie.director}
        onChange={onChange}
        error={errors.director}/>

      <TextInput
        name="producer"
        label="Producer"
        vale={movie.producer}
        onChange={onChange}
        error={errors.producer}/>

      <TextInput
        name="release_date"
        label="Release Date"
        vale={movie.release_date}
        onChange={onChange}
        error={errors.release_date}/>

      <TextInput
        name="description"
        label="Short Synopsis"
        vale={movie.description}
        onChange={onChange}
        error={errors.description}/>

      <input
          type="submit"
          disabled={loading}
          vale={loading ? "Saving..." : "Save"}
          className="btn btn-primary"
          onClick={onSave}/>
    </form>
  );
};

MovieForm.propTypes = {
  movie: React.PropTypes.object.isRequired,
  onChange: React.PropTypes.func.isRequired,
  onSave: React.PropTypes.func.isRequired,
  loading: React.PropTypes.bool,
  errors: React.PropTypes.object
};

export default MovieForm;
