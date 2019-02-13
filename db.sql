#xz_news[id/title/ctime/img_url/point/content]
USE xz;
CREATE TABLE wyy_yy(
   id  INT PRIMARY KEY AUTO_INCREMENT,
   title  VARCHAR(255),
   ctime  DATETIME,
   img_url VARCHAR(255),
   point   INT,
   content VARCHAR(2000)
);
INSERT INTO wyy_yy VALUES(null,'1231',now(),
'http://127.0.0.1:3000/0hr719uP7tmH738_-ZGf8g%3D%3D%2F109951163779132755.jpg',0,'123');
