"use client";
import React, {
  ReactEventHandler,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import Modal from "../Modal/Modal";
import {
  AssetJSXContainer,
  MediaCollageChildContainer,
  MediaCollageContainer,
  MediaCollageHover,
  MediaImage,
  ViewMediaContainer,

} from "./MediaCollageStyles";
import { findVideoType } from "./MediaCollageUtils";


type Media = {
  name: string;
  path: string;
};

type MediaLayout = {
  media: Media;
  rowSpan?: number;
  colSpan?: number;
};

interface MediaCollageProps {
  mediaLayout: Array<MediaLayout>;
  rows?: number;
  cols?: number;
}

interface AssetJSXProps {
  media: Media;
  rounded?: boolean;
  onLoad?: ReactEventHandler;
  onClick?: ReactEventHandler;
}

interface ViewMediaProps {
  media: Media | null;
  open: boolean;
  onClose: CallableFunction;
}

interface MediaCollageChildProps {
  media: Media;
  setSelected?: CallableFunction;
  rowSpan?: number;
  colSpan?: number;
}

const MediaCollage = ({ mediaLayout, rows, cols }: MediaCollageProps) => {
  const [selectedMedia, setSelectedMedia] = useState<Media | null>(null);

  return (
    <MediaCollageContainer rows={rows} cols={cols}>
      {mediaLayout.map(({ media, rowSpan, colSpan }) => (
        <MediaCollageChild
          key={media.name}
          rowSpan={rowSpan}
          colSpan={colSpan}
          media={media}
          setSelected={setSelectedMedia}
        />
      ))}
      <ViewMedia
        media={selectedMedia}
        open={selectedMedia !== null}
        onClose={() => setSelectedMedia(null)}
      />
    </MediaCollageContainer>
  );
};

const MediaCollageChild = ({
  media,
  setSelected,
  rowSpan,
  colSpan,
}: MediaCollageChildProps) => {
  const [hover, setHover] = useState(false);

  const handleClick = useCallback(
    (media: Media) => {
      if (setSelected) setSelected(media);
    },
    [setSelected]
  );

  return (
    <MediaCollageChildContainer
      rowSpan={rowSpan}
      colSpan={colSpan}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
      onClick={() => handleClick(media)}
    >
      <AssetJSX media={media} rounded={true} />
      <MediaCollageHover hidden={!hover}>{media.name}</MediaCollageHover>
    </MediaCollageChildContainer>
  );
};

const AssetJSX = ({
  media,
  rounded = false,
  onLoad,
  onClick,
}: AssetJSXProps) => {
  const videoType = useMemo(() => findVideoType(media.path), [media]);

  const handleContextMenu = useCallback((e: any) => {
    e.preventDefault();
  }, []);

  if (videoType) {
    return (
      <AssetJSXContainer rounded={rounded} onClick={onClick}>
        <video onContextMenu={handleContextMenu}>
          <source src={media.path} type={videoType} />
        </video>
      </AssetJSXContainer>
    );
  }
  return (
    <AssetJSXContainer rounded={rounded} onClick={onClick}>
      <MediaImage
        onContextMenu={handleContextMenu}
        src={media.path}
        alt={media.name}
        fill
      />
    </AssetJSXContainer>
  );
};

const ViewMedia = ({ media, open, onClose }: ViewMediaProps) => {

  const onCloseInternal = useCallback(() => {
    onClose();
  }, [onClose]);

  return (
    <Modal
      isOpen={open && media !== null}
      onClose={onCloseInternal}
      closable={true}
      container={false}
    >
      {media && (
        <ViewMediaContainer onClick={onCloseInternal}>
          <AssetJSX
            media={media}
            rounded={true}
            onClick={(e) => e.stopPropagation()}
          />
        </ViewMediaContainer>
      )}
    </Modal>
  );
};

export default MediaCollage;
