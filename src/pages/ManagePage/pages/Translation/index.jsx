import React, { Component } from 'react';
import Culture from '../../component/container/component/Cultural';

export default class Translation extends Component {

  render() {
    return (
      <Culture
        apiConfig={{
          situation:"Translation",
          role:"Translation",
          fileInfos: 'https://localhost:5000/api/fileinfos',
          downloadFile: 'https://localhost:5000/api/file',
          deleteFile: 'https://localhost:5000/api/file',
        }}
      ></Culture>
    )
  }
};