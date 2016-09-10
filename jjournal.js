/**
 * A jJournalEntry object that represents a fairly standard journal as in
 *  diary or notes or general journal.
 *
 */
function JournalEntry() {
  this.id = null;
  this.subject = null;
  this.body = null;
  this.date = null;
  this.from = null;
  this.attachments = {};  
}


/**
 * Setting up the public interface
 */

module.exports.JournalEntry = JournalEntry;
