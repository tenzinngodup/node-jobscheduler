
/**
 * Escape special characters in the given string of html.
 *
 * @param  {String} html
 * @return {String}
 */
function formatRequestXML (url_input, body_input) {
        return {
          url: url_input, //URL to hit
          method: 'POST',
          headers: {
            'Content-Type': 'text/xml',
          },
          body: body_input //Set the body as a string
        };
}

var request = require('request-promise');
var convert = require('xml-js');
var parser = require("js2xmlparser");



module.exports = {

    // this.partition = config.partition || 0;
    // this.brokers = config.brokers || "localhost:9092";
    // this.topic = config.topic;
    // var server = :\


  server:function(input){
    this.host = input.host || "http://localhost";
    this.port = input.port || 4044;  
    return this; 
  },

  all:function(){

    var xml = formatRequestXML(this.host,'<show_jobs/>');

    return request(xml).then(function(response){
        var result = convert.xml2json(response, {compact: true, spaces: 4});
        return result;

    });

  },
  history:function(job){

    var xml = formatRequestXML(this.host,'<show_history  job="' + job + '"/>');

     return request(xml).then(function(response){
        var result = convert.xml2json(response, {compact: true, spaces: 4});
        return result;
    });
  },
  enable:function(job){

    var data = {
        "@": {
          "job": job,
          "cmd": "unstop"
        }
    };
    console.log(parser);
    var xml = parser("modify_job", data);
    xml = formatRequestXML(this.host,xml);

    return request(xml).then(function(response){
        var result = convert.xml2json(response, {compact: true, spaces: 4});
        return result;
    });

  },
  disable:function(job){

    var data = {
        "@": {
          "job": job,
          "cmd": "unstop"
        }
    };
    var xml = parser("modify_job", data);
    xml = formatRequestXML(this.host,xml);

    return request(xml).then(function(response){
        var result = convert.xml2json(response, {compact: true, spaces: 4});
        return result;
    });

  },



  escape: function(html) {
    return String(html)
      .replace(/&/g, '&amp;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  },

  /**
   * Unescape special characters in the given string of html.
   *
   * @param  {String} html
   * @return {String}
   */
  unescape: function(html) {
    return String(html)
      .replace(/&amp;/g, '&')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, '"')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>');
  }
};