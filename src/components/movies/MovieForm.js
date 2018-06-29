import React from 'react';
import TextInput from '../common/TextInput';
import TextareaInput from '../common/TextareaInput';

const MovieForm = ({movie, onSave, onChange, loading, errors}) => {
  return (
    <form>
      <h1>Edit Movie</h1>
      <div className="innerForm">
        <TextInput
          name="title"
          label="Title"
          value={movie.title}
          onChange={onChange}
          error={errors.title}/>

        <TextInput
          name="director"
          label="Director"
          value={movie.director}
          onChange={onChange}
          error={errors.director}/>

        <TextInput
          name="producer"
          label="Producer"
          value={movie.producer}
          onChange={onChange}
          error={errors.producer}/>

        <TextInput
          name="release_date"
          label="Release Date"
          value={movie.release_date}
          onChange={onChange}
          error={errors.release_date}/>

        <TextareaInput
          name="description"
          label="Short Synopsis"
          value={movie.description}
          onChange={onChange}
          error={errors.description}/>
      </div>

        <input
            type="submit"
            disabled={loading}
            value={loading ? "Saving..." : "Save"}
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
