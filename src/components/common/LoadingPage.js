import loadingIcon from '../../resources/images/loadingIcon.png'

export const LoadingPage = () => {
    return(
        <div
        className="pageLoader"
        >
        <div className="pageLoaderIcon"
        style = {{backgroundImage: `url(${loadingIcon})`}}
        ></div>
        <p>Loading...</p>
        </div>
    )
}