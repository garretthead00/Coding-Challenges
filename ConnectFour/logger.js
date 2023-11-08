const logger = (event, props) => {
    console.group(`\n-----logger event: ${event}`);
    console.log(props);
    console.groupEnd();
    console.log('-----\n')
}

module.exports = {
    logger
}