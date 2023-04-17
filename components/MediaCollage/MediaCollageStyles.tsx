"use client";
import Image from "next/image";
import styled from "styled-components";

interface MediaCollageContainerProps {
  rows?: number;
  cols?: number;
  gap?: number;
}

const MediaCollageContainer = styled.div<MediaCollageContainerProps>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.cols ?? 1}, 1fr);
  grid-template-rows: repeat(${(props) => props.rows ?? 1}, 1fr);
  width: 100%;
  height: 100%;
  grid-gap: ${(props) => props.gap ?? 5}px;
  padding: 20px;
`;

interface MediaCollageChildContainerProps {
  rowSpan?: number;
  colSpan?: number;
}

const MediaCollageChildContainer = styled.div<MediaCollageChildContainerProps>`
  grid-column: span ${(props) => props.colSpan ?? 1};
  grid-row: span ${(props) => props.rowSpan ?? 1};
  position: relative;
  cursor: pointer;
`;

const MediaImage = styled(Image)`
  position: relative !important;
`;

const MediaCollageHover = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 10;
  text-align: center;
  padding: 10px;
  display: ${(props) => (props.hidden ? "none" : "flex")};
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

interface AssetJSXContainerProps {
  rounded?: boolean;
}

const AssetJSXContainer = styled.div<AssetJSXContainerProps>`
  border-radius: ${(props) => (props.rounded ? "10px" : null)};
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height:100%;
`;

const ViewMediaContainer = styled.div`
  display:flex;
  align-items: center;
  justify-content: space-around;
  height:100%;
`;

const MediaInfoContainer = styled.div`
  padding:15px 30px;
  display:flex;
  flex-direction: column;
  justify-content:center;
  align-items: start;
  text-align:center;
  background-color: #3d3d3d;
  box-sizing: border-box;
  border-radius: 10px;
  width:25%;
`;

const MediaInfo = styled.div`
  margin: 10px 0px;
  display:flex;
  justify-content:center;
  align-items:center;
  text-align:center;
  cursor: default;
`;

const MediaInfoTitle = styled.div`
  display:flex;
  margin-right: 10px;
`;

const MediaInfoIcon = styled(MediaInfoTitle)`
  font-size: 25px;
`;

const MediaInfoValue = styled.div`
  text-align:start;
`;

export {
  MediaCollageContainer,
  MediaCollageChildContainer,
  MediaImage,
  MediaCollageHover,
  AssetJSXContainer,
  ViewMediaContainer,
  MediaInfoContainer,
  MediaInfo,
  MediaInfoIcon,
  MediaInfoTitle,
  MediaInfoValue
};
