import db from '../../utils/mysql2-connect.js';

export const getBarBookingListById = async (user_id) => {
    const sql = `
  SELECT
      bar_booking.*,
      bars.bar_id,
      bars.bar_name,
      bars.bar_addr,
      bar_time_slots.bar_time_slot_id,
      member_user.user_id,
      member_user.username,
      bar_pic.bar_pic_id,
      bar_pic.bar_pic_name,
      bar_pic.bar_img
  FROM
      bar_booking
  LEFT JOIN
      bars ON bar_booking.bar_id = bars.bar_id
  LEFT JOIN
      bar_time_slots ON bar_booking.bar_time_slot_id = bar_time_slots.bar_time_slot_id
  LEFT JOIN
      member_user ON bar_booking.user_id = member_user.user_id
  LEFT JOIN
      bar_pic ON bar_booking.bar_id = bar_pic.bar_id
  WHERE 
    bar_booking.user_id = ?
  `;
    const [results] = await db.query(sql, [user_id]);
    // 將 BLOB 數據轉換為 Base64 字符串
    const pics = results.map((pic) => {
        if (pic.bar_img) {
            const imageBase64 = Buffer.from(pic.bar_img).toString('base64');

            return {
                ...pic,
                bar_img: `data:image/jpeg;base64,${imageBase64}`,
            };
        }
        return pic;
    });
    return pics;
    return results[0];
};
