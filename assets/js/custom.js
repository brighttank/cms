
$(function() {
    $(".resize").resizable();
});

function edit_category_name()                     // edit category name
{
    $('.fruit').attr('contentEditable', true);
    $(".fruit").css("border", "1px solid #ccc");
    $('.fruit').focus();
}

function delete_category()                       // delete category
{
    var db = new PouchDB('pouchdb');
    var category_id = $("#category_id").val();
    if (category_id != "") {
        console.log(category_id);
        db.get(category_id).then(function(doc) {
           // alert("category deleted");
            db.remove(doc);
           // window.location.reload();
        });
    }
}
function show_cat_main(e)      // show sub categories
{
//        $(e).click(function() {
//          //  $(e).next().slideToggle();
//          $(".second-dropdwon-1").slideToggle();
//        });
}
function add_new_category(obj)      // add new category into pouchdb
{

    console.log(obj);
    var category_id = obj;
    var db = new PouchDB('pouchdb');
    var category_name = $("#new_cat").val().trim();
    console.log(category_name);
    //return false;
    if (category_name != "")
    {
        db.put({
            "name": category_name,
            "total_items": 0,
            "num_items": 0,
            "subcategories": [],
            "parent": category_id,
            "items": [],
            "_id": category_name
        }).then(function(response) {
            //alert("Category successfully added.")
           // console.log(response);
            $(".category_box").remove();
          //  window.location.reload();
        }). catch (function(err) {
            //alert("Something went wrong. please try again!")
            console.log(err);
        });

    }
}
function close_box()        // close category box
{
    $(".category_box").remove();
}
function show_item_detail(obj, obj1)    // get item details 
{

    // $(".responsive-table tr td input").removeClass("filled-in");
    var item_id = obj;


    if ($("#" + obj1).is(':checked')) {
        $(".col.s5.right-sideform .ajax-loader").show();

        $(".responsive-table tr").removeClass("foo");
        $("#" + obj1).parent().parent().addClass("foo");
        $('.responsive-table tr td input').attr('checked', false);
        $("#" + obj1).attr('checked', true);
        //$('.responsive-table tr td input').removeClass("filled-in");
        // $("#" + obj1).addClass("filled-in");
        var db = new PouchDB('pouchdb');
        console.log(item_id);
        db.get(item_id, {attachments: true}).then(function(doc) {
            console.log(doc);
            $(".col.s5.right-sideform .ajax-loader").hide();
            $("#English").val(doc.english);
            $("#chinese").val(doc.chinese);
            $("#pinyin").val(doc.pinyin);
            $("#doc_item").val(item_id);
            $("#dov_rev").val(doc._rev);
            $(".item_image").val("");
            $(".item_audio").val("");
            var url = " ";
            console.log(doc._attachments);
            if (doc._attachments)
            {
                var image_attechment = doc._attachments['attach_image'];

                if (image_attechment)
                {
                    var imagedata = image_attechment.data;
                    if (imagedata)
                    {
                        var imageFW = db.getAttachment(item_id, 'attach_image');
                        imageFW.then(function(blob) {
                            url = URL.createObjectURL(blob);
                            $('.file-path-wrapper .img-responsive').attr("src", url);
                        }). catch (function(err) {
                            $('.file-path-wrapper .img-responsive').attr("src", "");
                            console.log(err);
                        });
                    }
                    else
                    {
                        $('.file-path-wrapper .img-responsive').attr("src", "");
                    }
                }
                else
                {
                    $('.file-path-wrapper .img-responsive').attr("src", "");
                }
            }
            else
            {
                $('.file-path-wrapper .img-responsive').attr("src", "");
            }
            $(".col.s5.right-sideform .ajax-loader").hide();
        });
    }
    else {
        $("#English").val("");
        $("#chinese").val("");
        $("#pinyin").val("");
        $("#doc_item").val("");
        $("#dov_rev").val("");
        $(".item_image").val("");
        $(".item_audio").val("");
        $("#" + obj1).parent().parent().removeClass("foo");
    }
}
function remove_image()                 // Remove attachment image from selected item
{
    var itemid = $("#doc_item").val();
    var rev = $("#dov_rev").val();

    var db = new PouchDB('pouchdb');
    db.removeAttachment(itemid, 'attach_image', rev,
            function(err, res) {
                if (err) {
                    return console.log(err);
                } else {
                    $('.file-path-wrapper .img-responsive').attr("src", "");
                    $("#item_image").val("");
                    console.log(res + "Attachment Deleted successfully")
                }
            });
}
function remove_audio()                 // Remove attachment audio from selected item
{
    var itemid = $("#doc_item").val();
    var rev = $("#dov_rev").val();

    var db = new PouchDB('pouchdb');
    db.removeAttachment(itemid, 'attach_audio', rev,
            function(err, res) {
                if (err) {
                    return console.log(err);
                } else {
                    console.log(res + "Attachment Deleted successfully")
                    $("#item_audio").val("");
                }
            });
}



$(document).ready(function() {
    setTimeout(function() {
        $(".right").find("li").each(function() {
            var ff = $(this).find("a").length;
            if (ff == 0)
            {
                $(this).remove();
            }
        });
        $('.right.hide-on-med-and-down').bind("contextmenu", function() {
            return false;
        });
        $(".sub-menu-1").click(function() {
            $(".category_box").remove();
            $(this).next().slideToggle();
        });

        $('#megaUber').find('a').click(function(e) {
            e.stopPropagation();
            $(this).parent().toggleClass("active");
        });
        $('#megaUber-2').find('a').click(function(e) {
            //alert('df');
            e.stopPropagation();
            $(this).parent().toggleClass("active");
        });
    }, 3000);
    $(document).on('click', '.content-main-2', function(event) {
        if ($('.fruit').is('[contenteditable="true"]'))                            // edit category name
        {
            var $target = $(event.target);
            if (!$target.parents().is(".title")) {
                //event handling code

                var categoryname = $(".fruit").text();
                var category_id = $("#category_id").val();
                if (categoryname != "" && category_id != "")
                {
                    var db = new PouchDB('pouchdb');
                    db.get(category_id).then(function(doc) {
                        // update their age
                        doc.name = categoryname;
                        $('[id="nme'+doc._id+'"]').text(doc.name);
                        // put them back
                        return db.put(doc);
                    }).then(function() {
                        // fetch mittens again
                        return db.get(category_id);
                    }).then(function(doc) {
                        console.log(doc);
                        $('.fruit').attr('contentEditable', false);
                        $(".fruit").css("border", "none");
                       // alert("Category name updated");
                    });
                }
            }
        }


        $('.category_box').remove();
    });

    $("#category_image").change(function() {
        $("#catgory_form_submit").show();
    });

    jQuery("#update_category_form").on('submit', (function(e) {                               // upload category image 
        var categoryimage = document.getElementById("category_image").files;
        var db = new PouchDB('pouchdb');
        var category_id = $("#category_id").val();
        if (categoryimage.length > 0 && category_id != "")
        {


            db.get(category_id, {attachments: true}).then(function(doc) {
                console.log(doc);
                if (categoryimage.length > 0)
                {
                    var imagedata = categoryimage[0];
                    var imagetype = categoryimage.type;
                    var imagename = categoryimage.name;
                }
                else
                {
                    if (doc._attachments)
                    {
                        var image_attechment = doc._attachments['attach_image'];
                        console.log("my attachment");
                        console.log(image_attechment);
                        if (image_attechment)
                        {
                            var imagedata = image_attechment.data;
                            var imagetype = image_attechment.content_type;
                        }
                        else
                        {
                            var imagedata = "";
                            var imagetype = "";
                        }
                    }
                    else
                    {
                        var imagedata = "";
                        var imagetype = "";
                    }
                }
                return db.put({
                    "name": doc.name,
                    "_rev": doc._rev,
                    "items": doc.items,
                    "num_items": doc.num_items,
                    "parent": doc.parent,
                    "subcategories": doc.subcategories,
                    "_id": doc._id,
                    "total_items": doc.total_items,
                    _attachments: {
                        'attach_image': {
                            content_type: imagetype,
                            data: imagedata
                        }
                    }
                });

            }).then(function(response) {
                var imageFW = db.getAttachment(category_id, 'attach_image');

                imageFW.then(function(blob) {
                    url = URL.createObjectURL(blob);
                    $('.apple .img-responsive').attr("src", url);
                }). catch (function(err) {
                    $('.apple .img-responsive').attr("src", "");
                    console.log(err);
                });
                $("#catgory_form_submit").hide();
                console.log(response);// handle response
            }). catch (function(err) {
                console.log(err);
            });

        }


        return false;
    }));


    jQuery("#update_items_form").on('submit', (function(e) {
        var itemid = $("#doc_item").val();
        var imagefile = document.getElementById("item_image").files;
        var audiofiles = document.getElementById("item_audio").files;
        var db = new PouchDB('pouchdb');
        var item_english = $("#English").val();
        var item_chinese = $("#chinese").val();
        var item_pinyin = $("#pinyin").val();
        db.get(itemid, {attachments: true}).then(function(doc) {
            if (item_english == "") {
                item_english = doc.english;
            } else {
                item_english = item_english;
            }
            if (item_chinese == "") {
                item_chinese = doc.chinese;
            } else {
                item_chinese = item_chinese;
            }
            if (item_pinyin == "") {
                item_pinyin = doc.pinyin;
            } else {
                item_pinyin = item_pinyin;
            }
            if (imagefile.length > 0)
            {
                var imagedata = imagefile[0];
                var imagetype = imagedata.type;
                var imagename = imagedata.name;
            }
            else
            {
                if (doc._attachments)
                {
                    var image_attechment = doc._attachments['attach_image'];
                    console.log("my attachment");
                    console.log(image_attechment);
                    if (image_attechment)
                    {
                        var imagedata = image_attechment.data;
                        var imagetype = image_attechment.content_type;
                    }
                    else
                    {
                        var imagedata = "";
                        var imagetype = "";
                    }
                }
                else
                {
                    var imagedata = "";
                    var imagetype = "";
                }
            }

            if (audiofiles.length > 0)
            {
                var audiodata = audiofiles[0];
                var audiotype = audiodata.type;
                var audioname = audiodata.name;
            }
            else
            {
                if (doc._attachments)
                {
                    var audio_attechment = doc._attachments['attach_audio'];
                    if (audio_attechment)
                    {
                        var audiodata = audio_attechment.data;
                        var audiotype = audio_attechment.content_type;
                    }
                    else
                    {
                        var audiodata = "";
                        var audiotype = "";
                    }
                }
                else
                {
                    var audiodata = "";
                    var audiotype = "";
                }

            }

            var category = doc.categories[0];
            return db.put({
                "categories": [category],
                "_rev": doc._rev,
                "english": item_english,
                "chinese": item_chinese,
                "pinyin": item_pinyin,
                "_id": itemid,
                _attachments: {
                    'attach_image': {
                        content_type: imagetype,
                        data: imagedata
                    },
                    'attach_audio': {
                        content_type: audiotype,
                        data: audiodata
                    }
                }
            });

        }).then(function(response) {
            var imageFW = db.getAttachment(itemid, 'attach_image');
            $(".item_image").val("");
            $(".item_audio").val("");
            imageFW.then(function(blob) {
                url = URL.createObjectURL(blob);
                $('.file-path-wrapper .img-responsive').attr("src", url);
            }). catch (function(err) {
                $('.file-path-wrapper .img-responsive').attr("src", "");
                console.log(err);
            });
            console.log(response);// handle response
        }). catch (function(err) {
            console.log(err);
        });
        return false;
    }));
});


