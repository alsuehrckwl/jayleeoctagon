import React, { Component } from 'react';
import PropTypes from 'prop-types';
import autobind from 'autobind-decorator';
import { db, auth, storage } from '../../shared/Firebase/firebase';
import connect from 'redux-connect-decorator';
import { logout } from '../../store/Auth/Auth.saga';
import FileUploader from 'react-firebase-file-uploader';

@connect(
  state => ({}),
  {
    logout,
  },
)
export class Upload extends Component {
  constructor(props) {
    super(props);

    this.state = {
      uk: '',

      username: '',
      avatar: '',
      isUploading: false,
      progress: 0,
      avatarURL: '',
    };
  }

  @autobind
  handleChangeUsername(event) {
    this.setState({ username: event.target.value });
  }

  @autobind
  handleUploadStart() {
    this.setState({ isUploading: true, progress: 0 });
  }

  @autobind
  handleProgress(progress) {
    this.setState({ progress });
  }

  @autobind
  handleUploadError(error) {
    this.setState({ isUploading: false });
    console.error(error);
  }

  @autobind
  handleUploadSuccess(filename) {
    this.setState({ avatar: filename, progress: 100, isUploading: false });
    storage
      .ref('images')
      .child(filename)
      .getDownloadURL()
      .then(url => this.setState({ avatarURL: url }));
  }

  @autobind
  doSignOut() {
    auth
      .signOut()
      .then(() => {
        console.log('logout success');
      })
      .catch(error => {
        console.log(error);
      });
  }

  @autobind
  dbTest() {
    const test = db
      .ref('schedule')
      .orderByKey()
      .limitToLast(100);
    test.on('value', snapshot => {
      console.log(snapshot.val());
    });
  }

  @autobind
  getImage() {
    // octagon-logo-400-400.jpg
    storage
      .child('octagon-logo-400-400.jpg')
      .getDownloadURL()
      .then(url => {
        this.setState({
          uk: url,
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <button onClick={this.doSignOut}>logout</button>
        <button onClick={this.dbTest}>dbtest</button>
        <button onClick={this.getImage}>imageTest</button>
        <img src={this.state.uk} alt="UK flag" />

        <form>
          <label>Username:</label>
          <input
            type="text"
            value={this.state.username}
            name="username"
            onChange={this.handleChangeUsername}
          />
          <label>Avatar:</label>
          {this.state.isUploading && <p>Progress: {this.state.progress}</p>}
          {this.state.avatarURL && <img src={this.state.avatarURL} />}
          <div className="custom-file">
            <FileUploader
              className="custom-file-input"
              id="customFile"
              accept="image/*"
              name="avatar"
              randomizeFilename
              storageRef={storage.ref('images')}
              onUploadStart={this.handleUploadStart}
              onUploadError={this.handleUploadError}
              onUploadSuccess={this.handleUploadSuccess}
              onProgress={this.handleProgress}
            />
            <label className="custom-file-label" htmlFor="customFile">
              Choose file
            </label>
          </div>

          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">
              Example textarea
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            />
          </div>
        </form>
      </div>
    );
  }
}

Upload.propTypes = {
  logout: PropTypes.func,
};

export default Upload;
