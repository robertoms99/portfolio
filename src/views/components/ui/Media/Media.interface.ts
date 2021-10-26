interface IMediaComponent
  extends React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
  object: string
  objectClassName?: string
}

export default IMediaComponent
